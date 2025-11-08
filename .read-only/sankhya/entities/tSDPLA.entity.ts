import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsdpltEntity } from './tSDPLT.entity';

@Index('PK_TSDPLA', ['nupla'], { unique: true })
@Entity('TSDPLA', { schema: 'SANKHYA' })
export class TsdplaEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('datetime', { name: 'DHPRIEXEC' })
  dhpriexec: Date;

  @Column('datetime', { name: 'DHLIMEXEC', nullable: true })
  dhlimexec: Date | null;

  @Column('text', { name: 'ENVIO', nullable: true })
  envio: string | null;

  @Column('text', { name: 'EXPORTACAO', nullable: true })
  exportacao: string | null;

  @Column('datetime', { name: 'DHPROXEXEC', nullable: true })
  dhproxexec: Date | null;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ativo: string | null;

  @OneToMany(() => TsdpltEntity, (tsdpltEntity) => tsdpltEntity.nupla2)
  tsdplts: TsdpltEntity[];
}
