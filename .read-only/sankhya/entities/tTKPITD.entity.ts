import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK__TTKPITD__6C2F93394989EC61', ['sequencia'], { unique: true })
@Index('UNQ_TTKPITD_CHAVE', ['chave', 'nuproc'], { unique: true })
@Entity('TTKPITD', { schema: 'SANKHYA' })
export class TtkpitdEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', {
    name: 'CHAVE',
    nullable: true,
    unique: true,
    length: 44,
  })
  chave: string | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('int', { name: 'NUPROC', nullable: true, unique: true })
  nuproc: number | null;

  @Column('varchar', { name: 'CNPJGERENCIADO', nullable: true, length: 1 })
  cnpjgerenciado: string | null;

  @ManyToOne(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.ttkpitds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc2: TtkprocEntity;
}
