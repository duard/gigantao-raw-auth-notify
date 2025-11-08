import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';

@Index('PK_TCSESA', ['nufap', 'numetapa', 'codprod'], { unique: true })
@Entity('TCSESA', { schema: 'SANKHYA' })
export class TcsesaEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    name: 'COMPLEMENTAR',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  complementar: string | null;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcsesas)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;
}
