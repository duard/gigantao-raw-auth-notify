import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfapEntity } from './tCSFAP.entity';

@Index('PK_TCSREQ', ['nufap', 'codreq'], { unique: true })
@Entity('TCSREQ', { schema: 'SANKHYA' })
export class TcsreqEntity {
  @Column('int', { primary: true, name: 'CODREQ' })
  codreq: number;

  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 60 })
  nome: string | null;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('text', { name: 'CASOUSO', nullable: true })
  casouso: string | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('varchar', {
    name: 'TODAETAPA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  todaetapa: string | null;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcsreqs)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;
}
