import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfeqfEntity } from './tGFEQF.entity';

@Index('PK_TGFMFE', ['codmfe'], { unique: true })
@Entity('TGFMFE', { schema: 'SANKHYA' })
export class TgfmfeEntity {
  @Column('int', { primary: true, name: 'CODMFE' })
  codmfe: number;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 60 })
  modelo: string | null;

  @Column('varchar', { name: 'CODATIVACAO', nullable: true, length: 32 })
  codativacao: string | null;

  @Column('varchar', { name: 'ASSINATURA', nullable: true })
  assinatura: string | null;

  @Column('char', { name: 'HOMOLOGA', nullable: true, length: 1 })
  homologa: string | null;

  @Column('varchar', { name: 'CNPJHOMOLOG', nullable: true, length: 14 })
  cnpjhomolog: string | null;

  @Column('char', { name: 'IPWEBCONNECTION', nullable: true, length: 30 })
  ipwebconnection: string | null;

  @Column('char', { name: 'COMPARTILHADO', nullable: true, length: 1 })
  compartilhado: string | null;

  @ManyToOne(() => TgfeqfEntity, (tgfeqfEntity) => tgfeqfEntity.tgfmfes)
  @JoinColumn([{ name: 'CODEQUIP', referencedColumnName: 'codequip' }])
  codequip: TgfeqfEntity;
}
