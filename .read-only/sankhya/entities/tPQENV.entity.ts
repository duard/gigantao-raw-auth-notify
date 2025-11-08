import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqdplEntity } from './tPQDPL.entity';

@Index('PK_TPQENV', ['nupla', 'nuinstancia', 'chave', 'chave2', 'sequencia'], {
  unique: true,
})
@Entity('TPQENV', { schema: 'SANKHYA' })
export class TpqenvEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('numeric', {
    primary: true,
    name: 'NUINSTANCIA',
    precision: 10,
    scale: 0,
  })
  nuinstancia: number;

  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { primary: true, name: 'CHAVE2' })
  chave2: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'QTDENVIO', nullable: true })
  qtdenvio: number | null;

  @Column('datetime', { name: 'DHULTENVIO', nullable: true })
  dhultenvio: Date | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 100 })
  email: string | null;

  @Column('char', { name: 'RESPONDIDO', length: 1, default: () => "'N'" })
  respondido: string;

  @Column('int', { name: 'CODFILA', nullable: true })
  codfila: number | null;

  @ManyToOne(() => TpqdplEntity, (tpqdplEntity) => tpqdplEntity.tpqenvs)
  @JoinColumn([
    { name: 'NUPLA', referencedColumnName: 'nupla' },
    { name: 'NUINSTANCIA', referencedColumnName: 'nuinstancia' },
    { name: 'CHAVE', referencedColumnName: 'chave' },
    { name: 'CHAVE2', referencedColumnName: 'chave2' },
  ])
  tpqdpl: TpqdplEntity;
}
