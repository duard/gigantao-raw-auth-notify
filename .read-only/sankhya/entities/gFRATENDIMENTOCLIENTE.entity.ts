import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { GfratendimentoclienteitensEntity } from './gFRATENDIMENTOCLIENTEITENS.entity';
import { GfratendimentoclientepesquisaEntity } from './gFRATENDIMENTOCLIENTEPESQUISA.entity';

@Index('PK_GFRATENDIMENTOCLIENTE', ['id'], { unique: true })
@Entity('GFRATENDIMENTOCLIENTE', { schema: 'SANKHYA' })
export class GfratendimentoclienteEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DTCRIACAO', default: () => 'getdate()' })
  dtcriacao: Date;

  @ManyToOne(
    () => TgfcabEntity,
    (tgfcabEntity) => tgfcabEntity.gfratendimentoclientes,
  )
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(
    () => TgfparEntity,
    (tgfparEntity) => tgfparEntity.gfratendimentoclientes,
  )
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(
    () => TgfvenEntity,
    (tgfvenEntity) => tgfvenEntity.gfratendimentoclientes,
  )
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @OneToMany(
    () => GfratendimentoclienteitensEntity,
    (gfratendimentoclienteitensEntity) =>
      gfratendimentoclienteitensEntity.idatendimento2,
  )
  gfratendimentoclienteitens: GfratendimentoclienteitensEntity[];

  @OneToMany(
    () => GfratendimentoclientepesquisaEntity,
    (gfratendimentoclientepesquisaEntity) =>
      gfratendimentoclientepesquisaEntity.idatendimento2,
  )
  gfratendimentoclientepesquisas: GfratendimentoclientepesquisaEntity[];
}
