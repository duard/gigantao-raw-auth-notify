import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFMEN', ['dhorig', 'codusuorig'], { unique: true })
@Entity('TGFMEN', { schema: 'SANKHYA' })
export class TgfmenEntity {
  @Column('datetime', { primary: true, name: 'DHORIG' })
  dhorig: Date;

  @Column('smallint', { primary: true, name: 'CODUSUORIG' })
  codusuorig: number;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;

  @Column('datetime', { name: 'DHDEST', nullable: true })
  dhdest: Date | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'S'" })
  pendente: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmen)
  @JoinColumn([{ name: 'CODUSUORIG', referencedColumnName: 'codusu' }])
  codusuorig2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmen2)
  @JoinColumn([{ name: 'CODUSUDEST', referencedColumnName: 'codusu' }])
  codusudest: TsiusuEntity;
}
