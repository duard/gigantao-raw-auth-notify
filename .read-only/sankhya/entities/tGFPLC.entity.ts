import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcpeEntity } from './tGFCPE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfpliEntity } from './tGFPLI.entity';

@Index('PK_TGFPLC', ['nucesta'], { unique: true })
@Index('TGFPLC_I01', ['codparc', 'codprod', 'dtref'], { unique: true })
@Entity('TGFPLC', { schema: 'SANKHYA' })
export class TgfplcEntity {
  @Column('int', { primary: true, name: 'NUCESTA' })
  nucesta: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'APROVADO', length: 1, default: () => "'N'" })
  aprovado: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', {
    name: 'TIPO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  tipo: string | null;

  @OneToMany(() => TgfcpeEntity, (tgfcpeEntity) => tgfcpeEntity.nucesta2)
  tgfcpes: TgfcpeEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfplcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfplcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfplcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfpliEntity, (tgfpliEntity) => tgfpliEntity.nucesta2)
  tgfplis: TgfpliEntity[];
}
