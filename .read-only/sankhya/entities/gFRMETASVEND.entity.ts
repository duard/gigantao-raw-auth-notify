import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { GfrvendEntity } from './gFRVEND.entity';
import { GfrmetasunidEntity } from './gFRMETASUNID.entity';

@Index('PK_GFRMETASVEND', ['codmetaunid', 'codvend'], { unique: true })
@Entity('GFRMETASVEND', { schema: 'SANKHYA' })
export class GfrmetasvendEntity {
  @Column('int', { primary: true, name: 'CODMETAUNID' })
  codmetaunid: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('float', { name: 'META', precision: 53 })
  meta: number;

  @Column('datetime', {
    name: 'DATACRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  datacriacao: Date | null;

  @ManyToOne(
    () => GfrvendEntity,
    (gfrvendEntity) => gfrvendEntity.gfrmetasvends,
  )
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: GfrvendEntity;

  @ManyToOne(
    () => GfrmetasunidEntity,
    (gfrmetasunidEntity) => gfrmetasunidEntity.gfrmetasvends,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODMETAUNID', referencedColumnName: 'codmeta' }])
  codmetaun: GfrmetasunidEntity;
}
