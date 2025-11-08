import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index(
  'PK_TGASAL',
  ['referencia', 'codprod', 'codlocal', 'codparc', 'numcontrato', 'controle'],
  {
    unique: true,
  },
)
@Entity('TGASAL', { schema: 'SANKHYA' })
export class TgasalEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('float', { name: 'SALDO', nullable: true, precision: 53 })
  saldo: number | null;

  @Column('int', { primary: true, name: 'NUMCONTRATO', default: () => '(0)' })
  numcontrato: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 16,
    default: () => "' '",
  })
  controle: string;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgasals)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgasals)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgasals)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;
}
