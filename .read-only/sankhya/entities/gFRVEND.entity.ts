import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { GfrmetasvendEntity } from './gFRMETASVEND.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK__GFRVEND__57AB52C812532CAF', ['codvend'], { unique: true })
@Entity('GFRVEND', { schema: 'SANKHYA' })
export class GfrvendEntity {
  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('varchar', { name: 'NOME', length: 60 })
  nome: string;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 200 })
  endereco: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 11 })
  telefone: string | null;

  @Column('varchar', { name: 'CELULAR', length: 11 })
  celular: string;

  @Column('varchar', { name: 'EMAIL', length: 200 })
  email: string;

  @Column('varchar', { name: 'TOKENFIREBASE', nullable: true, length: 255 })
  tokenfirebase: string | null;

  @OneToMany(
    () => GfrmetasvendEntity,
    (gfrmetasvendEntity) => gfrmetasvendEntity.codvend2,
  )
  gfrmetasvends: GfrmetasvendEntity[];

  @OneToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.gfrvend, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}
