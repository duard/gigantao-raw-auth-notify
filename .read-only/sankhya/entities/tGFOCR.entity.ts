import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import { TgfanaocEntity } from './tGFANAOC.entity';
import { TgfccaiEntity } from './tGFCCAI.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK__TGFOCR__55F6417EFFFCE3D8', ['codorigem'], { unique: true })
@Entity('TGFOCR', { schema: 'SANKHYA' })
export class TgfocrEntity {
  @Column('int', { primary: true, name: 'CODORIGEM' })
  codorigem: number;

  @Column('varchar', { name: 'ORIGEM', length: 2 })
  origem: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'GERATITULO', length: 1, default: () => "'N'" })
  geratitulo: string;

  @Column('varchar', { name: 'HISTOCORRENCIA', length: 3103 })
  histocorrencia: string;

  @Column('varchar', { name: 'MOTIVOFIN', length: 3103 })
  motivofin: string;

  @Column('money', { name: 'VALOR' })
  valor: number;

  @Column('datetime', { name: 'DTOCORRENCIA' })
  dtocorrencia: Date;

  @OneToOne(() => TgfanaocEntity, (tgfanaocEntity) => tgfanaocEntity.codorigem2)
  tgfanaoc: TgfanaocEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfocrs)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.tgfocrs)
  @JoinColumn([{ name: 'NUCONF', referencedColumnName: 'nuconf' }])
  nuconf: TgfccaiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfocrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfocrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;
}
