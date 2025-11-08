import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPIPA', ['id'], { unique: true })
@Index('TFPIPA_I01', ['chave', 'tipo'], {})
@Index('TFPIPA_I02', ['chave'], {})
@Entity('TFPIPA', { schema: 'SANKHYA' })
export class TfpipaEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 32 })
  id: string;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 100 })
  chave: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 100 })
  tipo: string | null;

  @Column('varchar', { name: 'DETALHES', nullable: true, length: 3103 })
  detalhes: string | null;

  @Column('varchar', { name: 'ARTIGO', nullable: true, length: 1000 })
  artigo: string | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpipas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
