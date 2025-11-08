import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsocoEntity } from './tMSOCO.entity';

@Index('PK_TMSFVMDSTOCO', ['codfvm', 'sequencia'], { unique: true })
@Entity('TMSFVMDSTOCO', { schema: 'SANKHYA' })
export class TmsfvmdstocoEntity {
  @Column('int', { primary: true, name: 'CODFVM' })
  codfvm: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUNOTACTE' })
  nunotacte: number;

  @Column('datetime', { name: 'DHOCOR', nullable: true })
  dhocor: Date | null;

  @Column('int', { name: 'NUFINREC', nullable: true })
  nufinrec: number | null;

  @Column('int', { name: 'NUFINDESP', nullable: true })
  nufindesp: number | null;

  @Column('int', { name: 'CODCENCUSREC', nullable: true })
  codcencusrec: number | null;

  @Column('int', { name: 'CODCENCUSDESP', nullable: true })
  codcencusdesp: number | null;

  @Column('float', { name: 'VLROCO', nullable: true, precision: 53 })
  vlroco: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TmsocoEntity, (tmsocoEntity) => tmsocoEntity.tmsfvmdstocos)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TmsocoEntity;
}
