import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPDPT', ['id'], { unique: true })
@Entity('TFPDPT', { schema: 'SANKHYA' })
export class TfpdptEntity {
  @Column('varchar', { name: 'TITULO', nullable: true, length: 100 })
  titulo: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 3103 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'PKS', nullable: true, length: 500 })
  pks: string | null;

  @Column('datetime', {
    name: 'DHCRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dhcriacao: Date | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('int', { primary: true, name: 'ID', default: () => '(0)' })
  id: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpdpts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
