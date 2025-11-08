import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index(
  'PK_TCBHLT',
  ['nuagendctz', 'tipo', 'dhctz', 'numlote', 'referencia', 'codemp'],
  {
    unique: true,
  },
)
@Entity('TCBHLT', { schema: 'SANKHYA' })
export class TcbhltEntity {
  @Column('int', { primary: true, name: 'NUAGENDCTZ' })
  nuagendctz: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 3 })
  tipo: string;

  @Column('datetime', { primary: true, name: 'DHCTZ' })
  dhctz: Date;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbhlts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
